import { connect } from 'mongoose'

export const dbConnect = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        connect(process.env.MONGO_URL!) // '!' Significa "confía en nosotros"
            .then(() => {
                resolve()
            }).catch(() => {
                reject();
            });

    })
}