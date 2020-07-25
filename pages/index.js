import React, { useState } from "react";
import { EmptyState, Page, Layout } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import store from "store-js";
import ProductList from "../components/ProductList";
import axios from "axios";

function Index() {
  const [modal, setModal] = useState({ open: false });
  const emptyState = !store.get("ids");

  function handleSelection(resources) {
    const idsFromRosourses = resources.selection.map((product) => product.id);
    setModal({ open: false });
    store.set("ids", idsFromRosourses);
    console.log(store.get("ids"));
    const selectedResources = resources.selection;
    selectedResources.map((product) => makeApiCall(product));
  }
  async function makeApiCall(products) {
    axios({
      method: 'post',
      url: '/api/products',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    });
  }

  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: "Select Products",
          onAction: () => setModal({ open: true }),
        }}
      ></TitleBar>
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={modal.open}
        onCancel={() => setModal({ open: false })}
        onSelection={(resources) => handleSelection(resources)}
      />
      {emptyState ? (
        <Layout>
          <EmptyState
            heading="Manage your inventory transfers"
            action={{
              content: "Select Products",
              onAction: () => setModal({ open: true }),
            }}
            image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
          >
            <p>Select Products</p>
          </EmptyState>
        </Layout>
      ) : (
        <ProductList />
      )}
    </Page>
  );
}

export default Index;
