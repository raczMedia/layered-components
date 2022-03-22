import { defineFeature, loadFeature } from "jest-cucumber";
import { mount } from "@vue/test-utils";
import NavBar from "./NavBar.vue";

const feature = loadFeature(
  "src/components/navigation/NavBar/NavBar.feature"
);

defineFeature(feature, (test) => {
  test("Rendering the NavBar", ({ given, then }) => {
    let wrapper;
    given("The app loads the NavBar page", () => {
      wrapper = mount(NavBar);
    });

    then("the NavBar shows", () => {
      expect(wrapper.find('[aria-label="NavBar"]').exists()).toBe(true);
    });
  });
});
