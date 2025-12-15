import nanoid from "../utils/nanoid"

interface NoteJSON {
    readonly _id: string
    title: string,
    body: string,
    readonly createdAt: string
    readonly longDate: string
}

class Note {
    private _id: string
    public title: string
    public body: string
    private createdAt: Date

    constructor(title: string, body: string) {
        this._id = nanoid()
        this.title = title,
        this.body = body,
        this.createdAt = new Date()
    }

    get getID(): string {
        return this._id
    }

    get getCreatedAt(): Date {
        return this.createdAt
    }

    public getHumanReadableDate(): string {
        return this.createdAt.toLocaleString("en-CA",{
            dateStyle: "medium",
            timeStyle: "short"
        })
    }

    public longDate(): string {
        return this.createdAt.toLocaleString("en-CA",{
            dateStyle: "medium",
            timeStyle: "medium"
        })
    }

    public save(): void {
        const note: NoteJSON = {
            _id: this._id,
            title: this.title,
            body: this.body,
            createdAt: this.getHumanReadableDate(),
            longDate: this.longDate()
        }

        localStorage.setItem(this._id,JSON.stringify(note))
    }
}

export {
    type NoteJSON,
    Note
}