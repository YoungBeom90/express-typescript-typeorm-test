import {Column, Entity, PrimaryColumn} from "typeorm";

enum AgreeEnum {
    AGREE = 1,
    DISAGREE = 0,
}

export type UserTypeVal =
    | 'smaster'
    | 'master'
    | 'onm'
    | 'safety_admin'
    | 'safety'
    | 'temporary'
    | 'owner'
    | 'general'
    | 'staff'
    | 'enerdot_staff'
    | 'enerdot_onm';

export type UserTypeSt =
    | 120
    | 105
    | 101
    | 99
    | 90
    | 80
    | 75
    | 73
    | 70
    | 63
    | 60;

@Entity('users')
export class User {
    @PrimaryColumn()
    id: string;

    @Column({type: 'varchar', nullable: false})
    userType: UserTypeVal;

    @Column({type: 'smallint', nullable: false, default: 45})
    userSt: UserTypeSt;

    @Column({type: 'varchar', nullable: false}) userName: string;
    @Column({type: 'varchar', nullable: true}) companyCode: string | null;
    @Column({type: 'varchar', nullable: true}) userPhone: string | null;
    @Column({type: 'varchar', nullable: true}) userEmail: string | null;
    @Column({type: 'varchar', nullable: true, default: 'Korea'}) userLoc:
        | string
        | null;
    @Column({
        type       : 'decimal',
        precision  : 10,
        scale      : 7,
        nullable   : true,
        default    : '36.5985557',
        transformer: {
            to(value) {
                return value;
            },
            from(value) {
                return parseFloat(value);
            },
        },
    })
    centeredLatitude: number | null;
    @Column({
        type       : 'decimal',
        precision  : 11,
        scale      : 8,
        nullable   : true,
        default    : '127.38119055',
        transformer: {
            to(value) {
                return value;
            },
            from(value) {
                return parseFloat(value);
            },
        },
    })
    centeredLongitude: number | null;
    @Column({
        type    : 'enum',
        nullable: true,
        default : AgreeEnum.AGREE,
        enum    : AgreeEnum,
    })
    useAgree: string | null;
    @Column({type: 'datetime', nullable: true}) useAgreeDate: Date | null;
    @Column({
        type    : 'enum',
        nullable: true,
        default : AgreeEnum.AGREE,
        enum    : AgreeEnum,
    })
    dataAgree: string | null;
    @Column({type: 'datetime', nullable: true}) dataAgreeDate: Date | null;
    @Column({type: 'datetime', nullable: true}) updatedAt: Date | null;
    @Column({type: 'varchar', nullable: true}) updatedBy: string | null;
    @Column({type: 'datetime', nullable: true}) createdAt: Date | null;
    @Column({type: 'varchar', nullable: true}) createdBy: string | null;
}
