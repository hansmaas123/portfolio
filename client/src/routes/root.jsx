import { Outlet } from 'react-router-dom';
// import Header from '../components/Header';

const loader = async () => {
    const data = "e";
    return data;
};

const Root = () => {
    return (
        <>
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
        </>
    );
}
Root.loader = loader;
export default Root;