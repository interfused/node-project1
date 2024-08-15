import React from "react";

// Define the type for Sidebar props (accept navigateItem as a prop)
type SidebarProps = {
  navigateItem: (section: string) => void;
};

type SidebarElementProps = {
  displayText: string;
  navigateItem: () => void;
};

function Sidebar({ navigateItem }: SidebarProps) {
  return (
    <div className="Sidebar">
      <SidebarElement
        displayText="HOME"
        navigateItem={() => navigateItem("HOME")}
      />
      <SidebarElement
        displayText="Profile"
        navigateItem={() => navigateItem("Profile")}
      />
      <SidebarElement
        displayText="History"
        navigateItem={() => navigateItem("History")}
      />
    </div>
  );
}

function SidebarElement({ displayText, navigateItem }: SidebarElementProps) {
  return <button onClick={navigateItem}>{displayText}</button>;
}

export { Sidebar };
