interface NoteJSON {
    readonly _id: number
    title: string,
    body: string,
    readonly createdAt: Date
}

class Note {
    private _id: number
    public title: string
    public body: string
    private createdAt: Date

    constructor(_id: number, title: string, body: string) {
        this._id = _id,
        this.title = title,
        this.body = body,
        this.createdAt = new Date()
    }

    get getID(): number {
        return this._id
    }

    get getCreatedAt(): Date {
        return this.createdAt
    }

    get getHumanReadableDate(): string {
        return this.createdAt.toLocaleString()
    }

}

export {
    type NoteJSON,
    Note
}