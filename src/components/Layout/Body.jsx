import { Search } from "../Search";
import { UserContainer } from "./UserContainer";

export const Body = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <section>
        <Search />
      </section>

      <section>
		<UserContainer />
	  </section>
    </div>
  );
};
