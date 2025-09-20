// import Navbar from "./Navbar.tsx";

const Dashboard = () => {
    return (
        <section className={"section-container"}>
            <div className={"section-actions"}>

                <button className={"create-project-btn"}>
                    {/*Plus svg*/}
                    <img src={"src/assets/plus-sign.svg"} alt={"plus sign svg"}
                         className={"create-icon"}/>
                    Create Project
                </button>

                {/*    Gear Icon*/}
                <button>
                    <img src={"src/assets/settings.svg"} alt={"settings icon svg"} className={"settings-icon"}/>
                </button>
            </div>

            <p className={"welcome-message"}>
                Welcome aboard! Start by creating your first <span> project</span> to get things rolling.

            </p>

        </section>
    )
}
export default Dashboard
