interface IProps {

}
const Footer = ({ }: IProps) => {
    return <>
        <footer className="p-6 mt-5 bg-gray-200 dark:bg-[#181818] shadow">
            <div className="flex items-center justify-center">
                <p className="font-medium text-sm">© 2024 <span className="font-bold text-indigo-600">VODO TASK</span> , All rights reserved.</p>
            </div>
        </footer>
    </>;
};

export default Footer;