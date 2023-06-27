<!DOCTYPE html>
<html>
<head>
  <title>PEOPLE DATA</title>
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css"/>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <script src="script.js"></script>    
</head>

<body>
    <div class="card w-50">
        <div class="card-body">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4" class="title">PEOPLE DATA</label>
                </div>
                <div class="form-group col-md-6 text-right">
                    <button id="previousButton" class="previous btn btn-secondary" onclick="loadPreviousPersons()">PREVIOUS</button>
                    <button id="nextButton" class="next btn btn-warning" onclick="loadNextPersons()" style="background-color:#f49c63;font-weight: bold; color: #ffffff;">NEXT PERSON</button>
                </div>
            </div>

            <div id="personContainer" class="rounded-table">
                <table class='table table-bordered'>
                </table>                
            </div>

            <span id="desc_title" class="desc_titles"></span>
        </div>
    </div> 
</body>
</html>
