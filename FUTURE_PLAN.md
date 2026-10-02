# EconoCausal - Project Status & Future Plan

## 1. What We Have Done Till Now
We have successfully developed the core Causal AI pipeline up to the budget optimization phase. The following steps have been completed:
- **Dataset Understanding & EDA:** Analyzed the Hillstrom RCT dataset, finding distributions for conversion (~0.9%) and spend.
- **Data Preprocessing & Feature Engineering:** Cleaned the data and formulated confounders/covariates (e.g., recency, history, channel).
- **Causal Formulation:** Designed the structural causal DAG using DoWhy to model relationships between features, treatment (Mens/Womens E-Mail), and outcomes (visit, conversion, spend).
- **Propensity & Baseline Modeling:** Trained models to predict treatment assignment probabilities.
- **Double Machine Learning (DML):** Estimated the Individual Treatment Effect (ITE) using EconML, specifically identifying the Conditional Average Treatment Effect (CATE) for conversion and spend.
- **Customer Segmentation:** Segmented the customer base into 4 quadrants (Persuadables, Sure Things, Lost Causes, Sleeping Dogs) based on uplift.
- **Budget Optimization:** Developed a Knapsack-based optimization engine to maximize ROI given campaign cost constraints, yielding a recommended target list.
- **Serialization:** Saved trained models, predictions, customer segments, and optimization summaries to the `models/` directory for downstream use.

## 2. Our Main Model
The core intelligence of this project relies on **Double Machine Learning (DML)**, integrating DoWhy (for causal assumptions) and EconML (for estimation).
- **Estimators Used:** Algorithms like `CausalForestDML` or `LinearDML` to compute the heterogeneous treatment effects.
- **First-Stage Models:** LightGBM models used for Propensity Scoring (Treatment Model) and Baseline Outcome prediction (Outcome Model).
- **Artifacts Generated:** 
  - `dml_conversion_model.joblib` (estimates causal effect on conversion rate)
  - `dml_spend_model.joblib` (estimates causal effect on monetary spend)

## 3. How the Backend Will Be Built (Future Plan)
To operationalize the EconoCausal models, we will build a scalable RESTful API backend.
- **Framework:** **FastAPI** (Python) for high performance and automatic interactive API documentation (Swagger).
- **Endpoints:**
  - `POST /api/v1/upload`: Ingest new customer datasets (CSV/Parquet).
  - `POST /api/v1/predict`: Pass customer features through the serialized DML models to output individual uplift scores (CATE).
  - `POST /api/v1/optimize`: Receive budget constraints and campaign costs to generate the optimal list of targeted customers using the optimization engine.
- **Architecture:** The backend will load the `.joblib` models into memory on startup and serve concurrent requests statelessly, enabling real-time or batch inference.

## 4. How the User Will Interact with the Website
The target user (e.g., a Marketing Manager) will interact with the system via a web-based dashboard. 
- **Step 1: Campaign Configuration:** The user starts by entering campaign parameters (e.g., cost per email, expected margin, total marketing budget).
- **Step 2: Audience Upload:** The user uploads a file containing their current active customer base.
- **Step 3: AI Processing:** The user clicks "Optimize Campaign". The system runs the backend models to calculate incremental ROI.
- **Step 4: Review Dashboard:** The user is presented with a dashboard showing estimated campaign lift, total cost, and projected revenue vs. traditional targeting.
- **Step 5: Export:** The user downloads the generated target list (`recommended_customer_list.csv`) to feed directly into their marketing delivery system (e.g., Mailchimp, Salesforce).

## 5. Frontend Features of Our Website
The frontend will likely be built using **React / Next.js** (or Streamlit for an initial MVP) with the following key features:
- **Interactive KPI Cards:** Total Budget, Targeted Users, Expected Incremental Revenue, and ROI.
- **Uplift Analytics Dashboard:** 
  - **Qini & Uplift Curves:** Visualizing how the causal model outperforms random targeting.
  - **Segment Breakdown:** A pie or bar chart showing the distribution of Persuadables, Sure Things, Lost Causes, and Sleeping Dogs.
  - **Feature Importance:** Visuals showing which customer attributes drive the highest uplift (e.g., recency, historical spend).
- **Budget Slider:** A dynamic slider allowing the user to adjust the marketing budget and instantly see the impact on total targeted users and expected revenue.
- **Data Export Hub:** Easy one-click download for actionable lists and PDF summary reports.

## 6. Important Reports & Artifacts Generated
During the training and evaluation phases, the system has produced several critical reports and artifacts:
- **Visual Reports (in `reports/` directory):**
  - `uplift_by_quantile.png`: Demonstrates the predicted uplift grouped by customer deciles.
  - `cate_distributions_mens.png` & `cate_distributions_womens.png`: Distribution of the causal effect for different campaigns.
  - `cate_feature_importance.png`: Highlights which features influence campaign responsiveness.
  - `ate_comparison.png` & `ate_comparison_consolidated.png`: Visualizes the Average Treatment Effect.
- **Data Artifacts (in `models/` directory):**
  - `customer_segments.parquet`: The categorized customer base based on their causal potential.
  - `recommended_customer_list.parquet`: The optimized final output list of users to target.
  - `budget_optimization_diagnostics.json`: Metrics summarizing the efficiency of the allocation strategy.
  - `uplift_rankings.parquet`: Customers ranked strictly by their incremental potential.
