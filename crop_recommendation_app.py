import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the data
df = pd.read_csv('crop_recommendation.csv')

# Streamlit app
st.title('Crop Type Recommendation Dashboard')

# Streamlit sidebar for filters
st.sidebar.header('Filter Options')

# Filter by humidity range
min_humidity = st.sidebar.slider('Min Humidity (%)', 0.0, 100.0, 0.0)
max_humidity = st.sidebar.slider('Max Humidity (%)', 0.0, 100.0, 100.0)

# Filter by temperature range
min_temperature = st.sidebar.slider('Min Temperature (°C)', 0.0, 50.0, 0.0)
max_temperature = st.sidebar.slider('Max Temperature (°C)', 0.0, 50.0, 50.0)

# Filter by pH range
min_ph = st.sidebar.slider('Min pH', 0.0, 14.0, 0.0)
max_ph = st.sidebar.slider('Max pH', 0.0, 14.0, 14.0)

# Filter by rainfall range
min_rainfall = st.sidebar.slider('Min Rainfall (mm)', 0.0, 300.0, 0.0)
max_rainfall = st.sidebar.slider('Max Rainfall (mm)', 0.0, 300.0, 300.0)

# Apply filters
filtered_df = df[(df['humidity'] >= min_humidity) & (df['humidity'] <= max_humidity) &
                 (df['temperature'] >= min_temperature) & (df['temperature'] <= max_temperature) &
                 (df['ph'] >= min_ph) & (df['ph'] <= max_ph) &
                 (df['rainfall'] >= min_rainfall) & (df['rainfall'] <= max_rainfall)]

# Display filtered data
st.write(f"### Showing {filtered_df.shape[0]} crop types")
st.dataframe(filtered_df)

# Display basic statistics
st.write("### Basic Statistics")
st.write(filtered_df.describe())

# Charts
st.header('Visualizations')

# Bar chart for average temperature per humidity range
st.subheader('Average Temperature per Humidity Range')
avg_temp_per_humidity = filtered_df.groupby('humidity')['temperature'].mean().reset_index()
st.bar_chart(avg_temp_per_humidity.set_index('humidity'))

# Line chart for temperature trend
st.subheader('Temperature Trend')
st.line_chart(filtered_df[['temperature']].reset_index(drop=True))

# Scatter plot of temperature vs humidity
st.subheader('Temperature vs Humidity')
fig, ax = plt.subplots()
ax.scatter(filtered_df['humidity'], filtered_df['temperature'], alpha=0.5)
ax.set_xlabel('Humidity (%)')
ax.set_ylabel('Temperature (°C)')
ax.set_title('Temperature vs Humidity')
st.pyplot(fig)

# Barplot Function for Comparison Graph
def crop_relation_visual(yfeature, df):
    st.subheader(f'Crops Relation with {yfeature}')
    
    # Create a bar plot
    plt.figure(figsize=(15, 8))
    sns.set_style('whitegrid')
    
    ax = sns.barplot(x="label", y=yfeature, data=df, ci=None)
    
    ax.bar_label(ax.containers[0], fontsize=12)
    
    plt.xticks(rotation=90, fontsize=14)
    plt.yticks(rotation=0, fontsize=14)
    plt.title(f'Crops Relation with {yfeature}', fontsize=24)
    plt.xlabel("Crops Name", fontsize=18)
    plt.ylabel(f"Values of {yfeature}", fontsize=18)
    
    # Render the plot in Streamlit
    st.pyplot(plt.gcf())

# Visualizations for pH and Rainfall
crop_relation_visual('ph', filtered_df)
crop_relation_visual('rainfall', filtered_df)
