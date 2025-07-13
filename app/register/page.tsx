import react from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FreeTrialForm from "../../components/register/FreeTrialForm";
import FreeTrialData from "../../components/register/FreeTrialData";
import Header from  "../../components/register/Header"

export default function Register() {

    return (
        <div className="h-screen bg-background overflow-hidden">
           <Header />
           
           <main className="grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-64px)] bg-muted/50">
                <div className="flex items-center justify-center p-8 dark:bg-gray-900 overflow-y-auto">
                    <div className="w-full max-w-none">
                        <FreeTrialForm />
                    </div>
                </div>
                
                <div className="flex items-center justify-center px-12 bg-muted/50 dark:bg-muted/30 overflow-y-auto">
                    <FreeTrialData />
                </div>
            </main>
            
        </div>

        
    )


}