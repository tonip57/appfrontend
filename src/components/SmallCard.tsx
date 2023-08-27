import "../styles/App.css"

const SmallCard = ({ title, value, icon }: { title: string, value: string, icon: any }) => {

    return (
        <div className="small-card">
            <h5 className="small-card-title">{title}</h5>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", marginTop: "13px", verticalAlign: "center"}}>
                    <h3 style={{ marginTop: "auto", marginLeft: "14px" }}>{value}</h3>
                    <h5 style={{ marginTop: "auto", marginLeft: "7px", fontSize: "18px", marginBottom: "10px" }}>c/kWh</h5>
                </div>
                {icon}
            </div>
        </div>
    )
}

export default SmallCard