'use client'
interface IProps {

}
import { Oval } from "react-loader-spinner";

const LoadingScreen = ({ }: IProps) => {
    return <>
        <div className="flex items-center justify-center h-screen">
            <Oval
                visible={true}
                height="80"
                width="80"
                ariaLabel="oval-loading"
                color="#0000FF"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    </>;
};

export default LoadingScreen;