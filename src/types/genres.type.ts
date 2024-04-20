export interface genresType {
    _id:string
    display:displayType
    name:string
    slug:string

}

type displayType = {
    bg_color: string
    image:string
}