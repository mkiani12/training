import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { FindBookmarksDto } from './dto/find-bookmarks.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarkService: BookmarksService) {}

  @Get()
  findAll(@Query() findBookmarksDto: FindBookmarksDto): Bookmark[] {
    if (Object.keys(findBookmarksDto).length > 0) {
      return this.bookmarkService.search(findBookmarksDto);
    }
    return this.bookmarkService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  findById(@Param('id') id: string): Bookmark {
    return this.bookmarkService.findById(id);
  }

  @Post('create')
  create(@Body() createBookmarkDto: CreateBookmarkDto): Bookmark {
    return this.bookmarkService.create(createBookmarkDto);
  }
}
