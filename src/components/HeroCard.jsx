import { Link } from "react-router";

const HeroCard = ({user}) => {
    return (
                    <Link to={`/details/${user.skillId}`} className="flex justify-center h-[300px] w-[500px]">
                        <img src={user.image} alt="" />
                    </Link>

    )
};

export default HeroCard;