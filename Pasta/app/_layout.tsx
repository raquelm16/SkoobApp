import { Tabs } from "expo-router";
import React from "react";

export default function AppLayout() {
  return (
    <Tabs screenOptions={{headerShown: false,}}>
      <Tabs.Screen
        name="Home"
        options={{
          href: '/',
        }}
      />

     <Tabs.Screen
        name="Login"
        options={{
          href: '/login',
        }}
      />

<Tabs.Screen
        name="Cadastro"
        options={{
          href: '/cadastro',
        }}
      />

<Tabs.Screen
        name="Biblioteca"
        options={{
          href: '/biblioteca',
        }}
      />
    </Tabs>
  );
}