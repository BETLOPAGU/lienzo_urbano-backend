import { PrismaService } from 'src/prisma.service';
import { CreateArtworkInput } from './dto/create-artwork.input';
import { FindArtworksInput } from './dto/find-artworks.input';
import { UpdateArtworkInput } from './dto/update-artwork.input';
import { Artwork } from './entities/artwork.entity';
import { FavoriteArtwork } from './entities/favoriteArtwork.entity';
import { ArtworkCollaborator } from './entities/artworkCollaborator.entity';
import { ArtworkTag } from './entities/artworkTag.entity';
import { ArtworkAddress } from './entities/artworkAddress.entity';
import { ArtworkColor } from './entities/artworkColor.entity';
import { ArtworkMovement } from './entities/artworkMovement.entity';
import { ArtworkMaterial } from './entities/artworkMaterial.entity';
import { User } from 'src/users/entities/user.entity';
import { S3Service } from 'src/s3.service';
export declare class ArtworksService {
    private readonly prisma;
    private readonly s3Service;
    constructor(prisma: PrismaService, s3Service: S3Service);
    deleteExtraProps(input: CreateArtworkInput | UpdateArtworkInput): {
        photo: string;
        collaborators: number[];
        tags: string[];
        addresses: string[];
        movements: string[];
        materials: string[];
    };
    create(artistId: number, createArtworkInput: CreateArtworkInput): Promise<Artwork>;
    findAll(findArtworksInput?: FindArtworksInput): Promise<Artwork[]>;
    findOne(id: number): Promise<Artwork>;
    update(id: number, updateArtworkInput: UpdateArtworkInput): Promise<Artwork>;
    remove(id: number): Promise<Artwork>;
    markUnmarkFavorite(userId: number, artworkId: number): Promise<FavoriteArtwork>;
    favoriteCount(artwork: Artwork): Promise<number>;
    overwriteCollaborators(artworkId: number, collaborators?: number[]): Promise<number>;
    collaborators(artwork: Artwork): Promise<ArtworkCollaborator[]>;
    overwriteTags(artworkId: number, tags?: string[]): Promise<number>;
    tags(artwork: Artwork): Promise<ArtworkTag[]>;
    overwriteAddresses(artworkId: number, addresses?: string[]): Promise<number>;
    addresses(artwork: Artwork): Promise<ArtworkAddress[]>;
    overwriteColors(artworkId: number, colors?: string[]): Promise<number>;
    colors(artwork: Artwork): Promise<ArtworkColor[]>;
    overwriteMovements(artworkId: number, movements?: string[]): Promise<number>;
    movements(artwork: Artwork): Promise<ArtworkMovement[]>;
    overwriteMaterials(artworkId: number, materials?: string[]): Promise<number>;
    materials(artwork: Artwork): Promise<ArtworkMaterial[]>;
    artist(artwork: Artwork): Promise<User>;
}
