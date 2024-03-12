import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmark.model';

import { v1 as uuid } from 'uuid';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { FindBookmarksDto } from './dto/find-bookmarks.dto';

@Injectable()
export class BookmarksService {
  private bookmarks: Bookmark[] = [];

  findAll(): Bookmark[] {
    return this.bookmarks;
  }

  findById(id: string): Bookmark {
    return this.bookmarks.find((bookmark) => bookmark.id === id);
  }

  search(findBookmarksDto: FindBookmarksDto): Bookmark[] {
    let bookmarks: Bookmark[] = this.findAll();

    for (const key in findBookmarksDto) {
      if (Object.prototype.hasOwnProperty.call(findBookmarksDto, key)) {
        bookmarks = bookmarks.filter((bookmark) =>
          bookmark[key]
            .toLowerCase()
            .includes(findBookmarksDto[key].toLowerCase()),
        );
      }
    }

    return bookmarks;
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
