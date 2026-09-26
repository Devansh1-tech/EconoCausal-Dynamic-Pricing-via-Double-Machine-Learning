graph [
  directed 1
  node [
    id 0
    label "History"
    node_type "covariate"
  ]
  node [
    id 1
    label "Recency"
    node_type "covariate"
  ]
  node [
    id 2
    label "ZipCode"
    node_type "covariate"
  ]
  node [
    id 3
    label "Channel"
    node_type "covariate"
  ]
  node [
    id 4
    label "Newbie"
    node_type "covariate"
  ]
  node [
    id 5
    label "Email_Campaign"
    node_type "treatment"
  ]
  node [
    id 6
    label "Website_Visit"
    node_type "mediator"
  ]
  node [
    id 7
    label "Conversion"
    node_type "outcome"
  ]
  node [
    id 8
    label "Spend"
    node_type "outcome"
  ]
  node [
    id 9
    label "Intrinsic_Intent"
    node_type "unobserved"
  ]
  edge [
    source 0
    target 5
  ]
  edge [
    source 0
    target 6
  ]
  edge [
    source 0
    target 7
  ]
  edge [
    source 0
    target 8
  ]
  edge [
    source 1
    target 5
  ]
  edge [
    source 1
    target 6
  ]
  edge [
    source 1
    target 7
  ]
  edge [
    source 1
    target 8
  ]
  edge [
    source 2
    target 5
  ]
  edge [
    source 2
    target 6
  ]
  edge [
    source 2
    target 7
  ]
  edge [
    source 2
    target 8
  ]
  edge [
    source 3
    target 5
  ]
  edge [
    source 3
    target 6
  ]
  edge [
    source 3
    target 7
  ]
  edge [
    source 3
    target 8
  ]
  edge [
    source 4
    target 5
  ]
  edge [
    source 4
    target 6
  ]
  edge [
    source 4
    target 7
  ]
  edge [
    source 4
    target 8
  ]
  edge [
    source 5
    target 6
  ]
  edge [
    source 6
    target 7
  ]
  edge [
    source 6
    target 8
  ]
  edge [
    source 7
    target 8
  ]
  edge [
    source 9
    target 6
  ]
  edge [
    source 9
    target 7
  ]
  edge [
    source 9
    target 8
  ]
]
