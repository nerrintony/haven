"use client";
import DashboardNav from "@/Component/DashboardNav/DashboardNav";
import Payment from "@/Component/Payment/Payment";
import PersonalCard from "@/Component/PersonalCard/PersonalCard";
import PrevTransaction from "@/Component/PrevTransaction/PrevTransaction";
import Sidebar from "@/Component/Sidebar/Sidebar";
import { useEffect,useState } from "react";
import Cardapi from "../clients/Cardapi";
export default function Home() {
    const [balance, setBalance] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => { 
        cardData()
    }, []);

    const cardData = async () => {
        try {
            let request = {
            
            }
            const response = await Cardapi.BalanceDetails(request);
            setBalance(response.data.data.balance)
            setName(response.data.data.first_name)
            setLoading(false)
           
            
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="d-flex mx-0">
                <div className={`d-lg-block d-none px-0`}>
                    <Sidebar />
                </div>
                <div className="flex-fill px-0">
                    <DashboardNav />
                    <div className="row mx-0">
                        <div className="col-lg-8 col-md-12 px-md-5 px-lg-1 col-12 px-sm-5 px-0">
                            <PersonalCard balance= {balance} name={name} loading={loading}/>
                            <PrevTransaction/>
                        </div>
                        <div className="col-lg-4 col border-start px-sm-5 px-lg-1 px-0">
                            <Payment balance= {balance} loading={loading}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
