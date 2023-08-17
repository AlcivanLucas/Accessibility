import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react'

import logoImage from '../assets/logoopa.png'
import { NewHabitForm } from './NewHabitForm';

import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Button from "./Button";



export function Header() {
    const { signout } = useAuth();
    const navigate = useNavigate();
    
    return (
        <div className=" top-5 w-full max-w-6xl mx-auto flex items-center justify-between">
            <div>
                 <img src={logoImage} alt="" className='w-16'/>
                 <h1>Acessibility</h1>
            </div>

           <div className='flex align-center'>
                <input placeholder='Pesquisar'
                className=' h-17'>
                </input>

                <Button/>
           </div>

            <Dialog.Root>

                <Dialog.Trigger
                    type="button"
                    className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
                >
                    <Plus size={20} className="text-violet-500" />
                  
                    Cadastrar local
                </Dialog.Trigger>


                <div>
                
                    <Button 
                        Text="Sair" 
                        onClick={() => [signout(), navigate("/")]}
                        
                    >
                            Sair
                    </Button>
                </div>

                
                <Dialog.Portal>
                    <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

                    <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2  -translate-y-1/2" >
                        <Dialog.Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900" >
                            <X size={24} arial-label="Fechar" />
                        </Dialog.Close>

                        <Dialog.Title className="text-3xl leading-tight font-extrabold">
                            Add Local
                        </Dialog.Title>

                        <NewHabitForm />
                    </Dialog.Content>
                </Dialog.Portal>

            </Dialog.Root>
        </div>
    )
}