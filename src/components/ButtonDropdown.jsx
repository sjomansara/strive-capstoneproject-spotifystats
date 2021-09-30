import { DropdownButton, Dropdown } from "react-bootstrap"

const ButtonDropdown = () => {
    return (
        <div>
            <DropdownButton
            className="ml-3"
            title="Last 30 days"
            id="dropdown-menu-align-right"
            >
            <Dropdown.Item id="dropdownItem" eventKey="1">Last 30 days</Dropdown.Item>
            <Dropdown.Item id="dropdownItem" eventKey="2">Last 365 days</Dropdown.Item>
            <Dropdown.Item id="dropdownItem" eventKey="3">All time</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default ButtonDropdown