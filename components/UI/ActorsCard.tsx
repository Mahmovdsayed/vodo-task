import { IMAGE_BASE_URL } from "@/utils/constants";
import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";

interface IProps {
    image: string;
    name: string;
    character: string
}
const ActorsCard = ({ image, name, character }: IProps) => {
    return <>
        <Card
            shadow="sm"
            isPressable
        >
            <CardBody className="overflow-hidden p-0">
                <Image
                    shadow="sm"
                    radius="none"
                    width="100%"
                    src={`${image == null
                        ? "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1713290436/hgm3qerrugol5rycsvjn.svg"
                        : `${IMAGE_BASE_URL}${image}`
                        }`}
                    alt={name}
                    className="w-full object-cover h-[350px]"
                />
            </CardBody>
            <CardFooter className="text-small bg-gray-200 dark:bg-[#181818] flex flex-col justify-between">
                <b>{name}</b>
                <p className="text-default-500">{character}</p>
            </CardFooter>
        </Card>
    </>;
};

export default ActorsCard;