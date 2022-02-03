import { EmptyState,Layout,Page,TextStyle } from '@shopify/polaris';

const Index = () => (
    <div>
      <Page>
        <Layout>
        <EmptyState
          heading="Manage your inventory transfers"
          action={{content: 'Add transfer'}}
          secondaryAction={{content: 'Learn more', url: 'https://help.shopify.com'}}
          image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
        >
          <p>Track and receive your incoming inventory from suppliers.</p>
        </EmptyState>
        </Layout>
      </Page>
    </div>
  );
  
  export default Index;