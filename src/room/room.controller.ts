import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateRoomDto } from './dto/create-room.dto';
import { RoomService } from './room.service';

@ApiTags('room')
@Controller('/room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  createRoomAndUserHost(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.createRoomAndUserHost(createRoomDto);
  }

  @Get('/:roomId')
  @ApiOperation({
    summary: 'Get a room by its ID',
  })
  findSingleRoom(@Param('roomId') id: string) {
    return this.roomService.findSingleRoom(id);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all running rooms',
  })
  findAllRooms() {
    return this.roomService.findAllRooms();
  }
}
