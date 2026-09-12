import { Tabs } from "expo-router";
import { tabs } from "@/constants/data";
import { Image, StyleSheet, View } from "react-native";
import { colors, components } from "@/constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

const TabIcon = ({ focused, icon }: TabIconProps) => {
  return (
    <View style={styles.iconFrame}>
      <View style={[styles.iconPill, focused && styles.activeIconPill]}>
        <Image source={icon} resizeMode="contain" style={styles.icon} />
      </View>
    </View>
  );
};

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIconStyle: styles.iconFrame,
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

const styles = StyleSheet.create({
  iconFrame: {
    width: tabBar.iconFrame,
    height: tabBar.iconFrame,
    alignItems: "center",
    justifyContent: "center",
  },
  iconPill: {
    width: tabBar.iconFrame,
    height: tabBar.iconFrame,
    borderRadius: tabBar.iconFrame / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  activeIconPill: {
    backgroundColor: colors.accent,
  },
  icon: {
    width: tabBar.iconFrame / 2,
    height: tabBar.iconFrame / 2,
  },
});

export default TabLayout;
