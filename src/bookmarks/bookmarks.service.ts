import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmark.model';

import { v1 as uuid } from 'uuid';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Injectable()
export class BookmarksService {
  private bookmarks: Bookmark[] = [];

  findAll(): Bookmark[] {
    return this.bookmarks;
  }

  create(createBookmarkDto: CreateBookmarkDto): Bookmark {
    const newItem: Bookmark = {
      id: uuid(),
      ...createBookmarkDto,
    };
    this.bookmarks.push(newItem);
    return newItem;
  }
}
