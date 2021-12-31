var out = ""
fetch("../achievement.json")
.then(res => res.json())
.then(response => {
  
    for (let i = 0; i < response.data.length; i++) {
      if(i==0){
        out += ' <li><a href=' + response.data[i].Credential_URL +'>' + response.data[i].Name + '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ' + response.data[i].Issuing_Organization +'</li>';
        out += "<span style='display:inline-block; width: 5%;'></span>This Specialization consists of different courses namely " +
        "<h6>1. Neural Networks and Deep Learning</h6>"+
        "<h6>2. Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization</h6>"+
        "<h6>3. Structuring Machine Learning Projects</h6>"+
        "<h6>4. Convolutional Neural Networks</h6>"+
        "<h6>5. Sequence Model</h6>";
      }
      else{
        out += '<li><a href=' + response.data[i].Credential_URL +'>' + response.data[i].Name + '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ' + response.data[i].Issuing_Organization +'</li>';
      }
    }
    $("#json").append(out);

})