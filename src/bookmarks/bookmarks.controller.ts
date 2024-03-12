import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarkService: BookmarksService) {}

  @Get()
  findAll(): Bookmark[] {
    return this.bookmarkService.findAll();
  }

  @Post('/create')
  create(@Body() createBookmarkDto: CreateBookmarkDto): Bookmark {
    return this.bookmarkService.create(createBookmarkDto);
  }
}
