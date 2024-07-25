import { Stack } from "expo-router";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function _layout() {
    return (
        <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen 
                    name="exercises" 
                    options={{
                        presentation:'fullScreenModal',
                        animation:'slide_from_bottom',
                    }} 
                    />
                <Stack.Screen 
                    name="exerciseDetails" 
                    options={{
                        presentation:'modal',
                        animation:'slide_from_bottom',
                    }} 
                    />
            </Stack>
        </QueryClientProvider>
    );
}
