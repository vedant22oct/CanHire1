import Header from "./Header";

function Layout(props) {
    return (
        <main>
            <Header />
            <section>
                {/* <aside>side bar</aside> */}
                <div className="page-content" style={{padding: 20}}>
                    {props.children}
                </div>
            </section>
        </main>
    )
}

export default Layout;