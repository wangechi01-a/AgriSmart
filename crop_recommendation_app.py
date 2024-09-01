import pandas as pd
import crop_recommendation_app as st
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

# Apply filters
filtered_df = df[(df['humidity'] >= min_humidity) & (df['humidity'] <= max_humidity) &
                 (df['temperature'] >= min_temperature) & (df['temperature'] <= max_temperature)]

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

# Pie chart of crop distribution
st.subheader('Crop Distribution')
crop_counts = filtered_df['crop_type'].value_counts()
fig, ax = plt.subplots()
ax.pie(crop_counts, labels=crop_counts.index, autopct='%1.1f%%', startangle=90)
ax.set_title('Crop Distribution')
st.pyplot(fig)
