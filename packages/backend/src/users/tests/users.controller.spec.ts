import { Test } from '@nestjs/testing';
import { User } from '../../typeorm/entities/User';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { userStub } from './stubs/user.stub';

jest.mock('../users.service');

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    describe('when create is called', () => {
      let user: User;
      let createUserDto: CreateUserDto;

      beforeEach(async () => {
        createUserDto = {
          username: userStub().username,
          email: userStub().email,
          password: userStub().password,
        };
        user = await usersController.create(createUserDto);
      });

      test('then it should call usersService', () => {
        expect(usersService.create).toHaveBeenCalledWith(createUserDto);
      });

      test('then it should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('findAll', () => {
    describe('when findAll is called', () => {
      let users: User[];

      beforeEach(async () => {
        users = await usersController.findAll();
      });

      test('then it should call usersService', () => {
        expect(usersService.findAll).toHaveBeenCalled();
      });

      test('then it should return an array of users', () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });
});
