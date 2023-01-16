import { Menu } from "../../components/header/Menu";
import { Aboutwe } from "../../components/about/aboutwe";
import { Questions } from "../../components/questions/Questions";
import { Comments } from "../../components/comments/Comments";

function Index () {
    return(
        <>
            <Menu />
            <Aboutwe />
            <Questions />
            <Comments />
        </>
    );
};

export { Index };