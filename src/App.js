import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import {DefaultLayout} from '~/components/layout'
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((element, index) => {
                        let Layout = DefaultLayout;
                        if (element.layout) {
                            Layout = element.layout;
                        } else if (element.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = element.component;
                        return <Route key={index} path={element.path} element={<Layout><Page /></Layout>} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
