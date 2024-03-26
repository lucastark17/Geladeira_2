import { createNativeStackNavigator } from "@react-navigation/native-stack";

import login from '../pages/login'
import cadastro from '../pages/cadastro'
import rec_senha from '../pages/rec_Senha'
import TabRoutes from "./tabRoutes";

const Stack = createNativeStackNavigator();
export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Login"
            component={login}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen 
            name="Cadastro"
            component={cadastro}
            options={{
                headerShadowVisible: false,
                headerBackVisible: false
            }}
            />
            <Stack.Screen 
            name="Rec Senha"
            component={rec_senha}
            options={{
                headerShadowVisible: false
            }}
            />
            <Stack.Screen 
            name="HomeTabs"
            component={TabRoutes}
            options={{
                headerShown: false
            }}
            />
        </Stack.Navigator>
    )
}