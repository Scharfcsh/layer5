import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

import { SistentThemeProvider } from "@layer5/sistent";
import TabButton from "../../../../../reusecore/Button";
import { SistentLayout } from "../../sistent-layout";
import { Row } from "../../../../../reusecore/Layout";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";
import {
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  OutlinedInput,
} from "@mui/material";

const SistentSelect = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();
  const [multipleAges, setMultipleAges] = React.useState([]);
  const handleMultiplSelect = (event) => {
    let agesList = event.target.value;
    setMultipleAges(agesList);
  };

  return (
    <SistentLayout title="Select">
      <div className="content">
        <a id="Identity">
          <h2>Select</h2>
        </a>
        <p>
          Select component is a dropdown menu for selecting an option from a
          list.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/select"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/select")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/select/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/select/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/select/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/select/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
            The Select component is a versatile and customizable element
            commonly used in forms and user interfaces. It is designed to
            present a list of options for users to choose from, either as a
            single selection or multiple selections. This component plays a
            vital role in collecting user-provided information efficiently and
            intuitively.
          </p>
          <a id="Types">
            <h2>Types</h2>
          </a>
          <p>
            To accommodate various design styles and use cases, the select
            component offers numerous customizable properties. Developers can
            customize how the component display the labels or selected option to
            improve user experience.
          </p>
          <h3>Outlined</h3>
          <p>
            The default style is "outlined," featuring a thin line around the
            selection area. The label appears above the selection, and the
            dropdown menu is displayed below it.
          </p>
          <Container sx={{ width: "200px" }}>
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl fullWidth>
                <InputLabel id="demo-select-label-outlined">Age</InputLabel>
                <Select
                  labelId="demo-select-label-outlined"
                  id="demo-select-outlined"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Container>
          <h3>Filled</h3>
          <p>
            Filled select feature a background color fill. Depending on the
            theme or intended action, the color fill ican range from a primary
            brand color to any other applicable color in a brand's color
            palette.
          </p>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Row $Hcenter className="image-container">
              <FormControl sx={{ width: "200px" }}>
                <InputLabel id="demo-select-label-filled">Age</InputLabel>
                <Select
                  labelId="demo-select-label-filled"
                  id="demo-select-filled"
                  label="Age"
                  variant="filled"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Row>
          </SistentThemeProvider>
          <h3>Standard</h3>
          <p>
            The standard style features a simple underline below the selection
            area.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl sx={{ width: "200px" }}>
                <InputLabel id="demo-select-label">Age</InputLabel>
                <Select
                  labelId="demo-select-label-standard"
                  id="demo-select-standard"
                  label="Age"
                  variant="standard"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Row>
          <a id="Label">
            <h2>Label and helper text</h2>
          </a>
          <p>
            The label is optional. If provided, helper text is displayed below
            the component to give the user more context about the component.
          </p>

          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Grid
              gap={2}
              container
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl sx={{ width: "200px" }}>
                <InputLabel id="demo-select-label">Age</InputLabel>
                <Select
                  labelId="demo-select-label"
                  id="demo-select"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>With label + Helper text</FormHelperText>
              </FormControl>
              <FormControl sx={{ width: "200px" }}>
                <Select id="demo-select-without-label" defaultValue={"None"}>
                  <MenuItem value={"None"}>None</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Without label</FormHelperText>
              </FormControl>
            </Grid>
          </SistentThemeProvider>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            The select component can be adjusted in size to accommodate various
            use cases. These size adjustments typically affect the height of the
            component, while the width adjusts to fit the content. The height of
            the select component is derived from our spacing system to maintain
            consistency. We offer multiple sizes to meet different needs.
          </p>
          <h3>Auto width</h3>
          <p>
            The width of the component can scale automatically to fit the
            content it contains. This ensures that the select component is
            appropriately sized based on the options available, providing a
            better user experience.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl sx={{ minWidth: "120px", m: 1 }}>
                <InputLabel id="demo-select-label">Age</InputLabel>
                <Select
                  labelId="demo-select-label-standard"
                  id="demo-select-standard"
                  label="Age"
                  autoWidth
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Row>
          <h3>Small</h3>
          <p>
            The small size select component is designed to fit into more compact
            spaces within a user interface. It is particularly useful when you
            need to conserve space or when the select component is part of a
            form with other small-sized elements. This ensures a consistent and
            visually appealing layout.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl sx={{ minWidth: "80px", m: 1 }} size="small">
                <InputLabel id="demo-select-label">Age</InputLabel>
                <Select
                  labelId="demo-select-label-standard"
                  id="demo-select-standard"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Row>
          <h3>Full width</h3>
          <p>
            Full width select are more efficient in mobile designs and rightly
            so in order to offer users with a wider touch area since the input
            devices - the fingers, are a lot larger than the cursor on a desktop
            or larger screen.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel id="demo-select-label">Age</InputLabel>
                <Select
                  labelId="demo-select-label-standard"
                  id="demo-select-standard"
                  label="Age"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Row>
          <a id="Multiple select">
            <h2>Multiple select</h2>
          </a>
          <p>
            The multiple select component allows users to select more than one
            option from the dropdown list. This is useful in scenarios where
            multiple selections are required, such as selecting multiple tags,
            categories, or items.
          </p>
          <Row $Hcenter className="image-container">
            <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
              <FormControl sx={{ minWidth: "80px", m: 1 }}>
                <InputLabel id="demo-select-label">Age</InputLabel>
                <Select
                  multiple
                  labelId="demo-select-label-standard"
                  id="demo-select-standard"
                  label="Age"
                  input={<OutlinedInput label="Name" />}
                  value={multipleAges}
                  onChange={handleMultiplSelect}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </SistentThemeProvider>
          </Row>
        </div>
      </div>
    </SistentLayout>
  );
};

export default SistentSelect;
