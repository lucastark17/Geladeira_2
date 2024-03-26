import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Agradecimento from "../pages/agradecimento";
import Carrinho from "../pages/carrinho"
import Home from "../pages/home";
import Checkout from "../pages/checkout"
import Produtos from "../pages/produtos"
const Stack = createNativeStackNavigator();
export default function HomeStack() {
    return (
        <Stack.Navigator>
             <Stack.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Produtos"
                component={Produtos}
            />
            <Stack.Screen
                name="Carrinho"
                component={Carrinho}
            />
            <Stack.Screen
                name="Checkout"
                component={Checkout}
            />
            <Stack.Screen
                name="Agradecimento"
                component={Agradecimento}
            />
        </Stack.Navigator>
    )
}