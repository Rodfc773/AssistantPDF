import { Model, Sequelize } from 'sequelize';
import bcryptjs from 'bcrypt';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        userName: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'This field is mandatory, so null values are not allowed',
            },
          },
        },
        userEmail: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email already exists',
          },
          validate: {
            isEmail: {
              msd: 'Invalid email',
            },
          },
        },

        paswordHash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },

        password: {
          type: Sequelize.VITUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [8, 50],
              msg: 'The password needs to be between 8 and 50 characters',
            },
          },
        },
      },
      { sequelize },
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password)
        user.paswordHash = await bcryptjs.hash(user.password, 8);
    });
    return this;
  }

  passwordValidator(password) {
    return bcryptjs.compare(password, this.paswordHash);
  }
}
