'use client'

import { store } from '@/redux/store'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingScreen from '@/components/UI/LoadingScreen';

export function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return <>
        {loading ? <LoadingScreen /> :
            <NextUIProvider navigate={router.push}>
                <NextThemesProvider attribute="class">
                    <Provider store={store}>
                        {children}
                    </Provider>
                </NextThemesProvider>
            </NextUIProvider>
        }
    </>


}