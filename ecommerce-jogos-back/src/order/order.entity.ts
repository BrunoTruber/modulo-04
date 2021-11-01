/* eslint-disable prettier/prettier */
import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import { User } from
import { Game } from
import { PaymentMethods } from
import { Delivery } from

@Entity()
export class Order{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    //soma

    @ManyToOne(() => User, user => user.order)
    user: User;

    @ManyToOne(() => Game, game => game.order)
    game: Game;

    // @ManyToOne(() => PaymentMethods, pag => pag.order)
    // pag: PaymentMethods;

    // @ManyToOne(() => Delivery, delivery => delivery.order)
    // delivery: Delivery;
}