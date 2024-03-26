import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Scan_QrCode from "../pages/scanQr";
import Perfl from "../pages/perfil";
import HomeStack from "./homeStack";
import { FontAwesome6 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor:"#000",

        }}>
            <Tab.Screen
                name="homeStack"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ size, color }) => <FontAwesome6 name="house" size={size} color={color} />
                }}

            />
            <Tab.Screen
                name="scan"
                component={Scan_QrCode}
                options={{
                    tabBarIcon: ({ size, color }) => <FontAwesome6  name="qrcode" size={size} color={color} />
                }}
            />

            <Tab.Screen
                name="perfil"
                component={Perfl}
                options={{
                    tabBarIcon: ({ size, color }) => <FontAwesome6  name="user" size={size} color={color} />
                }}

            />

        </Tab.Navigator>
    )
}