# EconoCausal - Project Status & Future Plan

## 1. What We Have Done Till Now
We have successfully developed, validated, and explained the entire 10-stage Causal AI pipeline:
- **Dataset Understanding & EDA (NB 01):** Analyzed the Hillstrom RCT dataset, finding distributions for conversion (~0.9%) and spend.
- **Data Preprocessing & Feature Engineering (NB 02):** Cleaned the data, handled mediator topologies (`visit`), and formulated confounders/covariates.
- **Causal Formulation (NB 03):** Designed the structural causal DAG using DoWhy to model relationships between features, treatment (Mens/Womens E-Mail), and outcomes.
- **Propensity & Baseline Modeling (NB 04):** Trained calibrated propensity models and estimated IPW weights.
- **Double Machine Learning (DML) (NB 05):** Estimated Heterogeneous Treatment Effects (CATE) using EconML's `CausalForestDML` with 5-fold orthogonal cross-fitting.
- **Treatment Effect Estimation (NB 06):** Inferred individual treatment effects for conversion and spend across customer cohorts.
- **Customer Segmentation (NB 07):** Segmented the customer base into 4 quadrants (Persuadables, Sure Things, Lost Causes, Sleeping Dogs) based on uplift.
- **Budget Optimization (NB 08):** Developed a Knapsack-based optimization engine maximizing MROIC under budget constraints.
- **Model Evaluation & Invariance Refutation (NB 09):** Validated causal ranking via Qini curves, AUUC, decile calibration, and passed all Microsoft DoWhy refutations (Placebo Treatment, Random Common Cause, Data Subset).
- **Explainability & Business Insights (NB 10):** Deconstructed CATE using Causal SHAP, conducted local counterfactual audits, proved +23.1% ROI in executive P&L simulation (beating RFM by 21.8x), and formulated continuous Dynamic Pricing extension.

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
During the training, evaluation, and explainability phases, the system has produced comprehensive publication-grade artifacts:
- **Visual Reports (in `reports/` directory):**
  - `qini_curves.png`: Cumulative incremental gain and Qini curves proving outperformance over random allocation.
  - `dowhy_refutation_results.png`: Robustness tests validating estimate invariance.
  - `causal_shap_summary.png`: Causal SHAP beeswarm attribution plots across conversion and spend.
  - `executive_pl_comparison.png`: Side-by-side financial P&L flows and ROI across 5 corporate policies.
  - `quadrant_behavioral_archetypes.png`: Multi-dimensional behavioral profiling across sales channels and geography.
  - `budget_roi_sensitivity.png`: Diminishing returns curve identifying the optimal capital allocation point ($1,160).
  - `uplift_by_quantile.png`, `cate_distributions_mens.png`, `ate_comparison.png`: Baseline and CATE distribution charts.
- **Executive Documentation:**
  - `reports/executive_summary.md`: C-suite briefing on business impact, ROI, and production governance.
- **Data & Metric Artifacts (in `models/` directory):**
  - `customer_segments.parquet`: 4-Quadrant uplift classification for all 57,438 customers.
  - `recommended_customer_list.parquet`: Knapsack-optimized target recommendations.
  - `evaluation_metrics.json` & `refutation_summary.json`: Formal validation and sensitivity results.
  - `explainability_summary.json`: Global SHAP rankings, archetype counterfactual ledger, and dynamic pricing metrics.
  - `executive_pl_simulation.json`: Complete 5-strategy corporate P&L breakdown.

