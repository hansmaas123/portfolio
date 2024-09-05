import { Outlet } from 'react-router-dom';

const loader = async () => {
    const data = "e";
    return data;
};

const Root = () => {
    return (
        <>
                <Outlet />
        </>
    );
}
Root.loader = loader;
export default Root;