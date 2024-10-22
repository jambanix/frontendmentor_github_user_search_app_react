import { Button } from "./Button"
import { SearchIcon } from "./Icons/SearchIcon"

export const Search = () => {
    return (
        <div className="flex relative items-center">
            <input type="text" placeholder="Search Github Username" className="basis-full pl-20"/>
            <SearchIcon containerClassName="absolute left-10"/>
            <Button className="absolute right-0 -ml-4">Search</Button>
        </div>
    )
}