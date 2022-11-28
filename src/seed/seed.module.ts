import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedResolver } from './seed.resolver';
import { ArtworksModule } from 'src/artworks/artworks.module';
import { UsersModule } from 'src/users/users.module';
import { CollectionsModule } from '../collections/collections.module';
import { CommentsModule } from '../comments/comments.module';
import { ReportsModule } from '../reports/reports.module';

@Module({
  providers: [SeedResolver, SeedService],
  imports: [
    ArtworksModule,
    UsersModule,
    CollectionsModule,
    CommentsModule,
    ReportsModule,
  ],
})
export class SeedModule {}