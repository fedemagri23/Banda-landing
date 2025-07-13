import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Header() {
    return ( 
        <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-50">
                    <div className="mx-auto px-8 py-4">
                        <div className="flex items-center justify-between">
                             <Link
                            href="/"
                            className="flex items-center gap-4 text-muted-text hover:text-primary group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform   "></ArrowLeft>
                                Volver al inicio
                            </Link>
                            <div className="text-2xl font-bold text-primary">
                                Banda
                            </div>
                            <div className="w-24"></div>
                        </div>
                    </div>
        </header>
    )
}
