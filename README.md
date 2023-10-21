Angular transaction-dashboard useful for data analysis. It contains a few charts the user can download, a sortable mat table that can be exported as CSV and graphs downloadable as HTML interactive objects containing more information about the highlighted data. 

In order to run the app:
1. Pull both transaction-dashboard and partners-data-server from the main repo.
2. Run the server and feed it with a CSV file with the following columns (transaction_id, partner_name, month, year, sale_value, country, region). There should be a partners_data_gen worksheet in the partners-data-server repo that allows one to generate random data to analyze.
3. ng serve the client-side app.
4. Access it @ localhost:4200
5. Explore it to your heart's content ^^
